import PropTypes from 'prop-types';

const isSeparatorRow = (line) => {
    const trimmed = line.trim();
    return trimmed.startsWith('|') && /-/.test(trimmed) && /^[|\s:-]+$/.test(trimmed);
};

const splitRow = (line) => {
    const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
    return trimmed.split('|').map((cell) => cell.trim());
};

const parseContentBlocks = (content) => {
    if (!content) return [];

    const lines = content.split('\n');
    const blocks = [];
    let buffer = [];

    const flushBuffer = () => {
        const text = buffer.join('\n').trim();
        if (text) {
            blocks.push({ type: 'text', text });
        }
        buffer = [];
    };

    let index = 0;
    while (index < lines.length) {
        const line = lines[index];
        const nextLine = lines[index + 1];

        if (line.trim().startsWith('|') && nextLine && isSeparatorRow(nextLine)) {
            flushBuffer();

            const header = splitRow(line);
            index += 2;
            const rows = [];

            while (index < lines.length && lines[index].trim().startsWith('|')) {
                rows.push(splitRow(lines[index]));
                index += 1;
            }

            blocks.push({ type: 'table', header, rows });
            continue;
        }

        buffer.push(line);
        index += 1;
    }

    flushBuffer();

    if (!blocks.length) {
        return [{ type: 'text', text: content }];
    }

    return blocks;
};

export default function NewsContent({ content, textClassName, tableClassName }) {
    const blocks = parseContentBlocks(content);

    if (!blocks.length) return null;

    const tableClasses = [
        'min-w-full border border-gray-200 text-sm md:text-base',
        tableClassName
    ].filter(Boolean).join(' ');

    return (
        <div className={`space-y-4 ${textClassName || ''}`}>
            {blocks.map((block, blockIndex) => {
                if (block.type === 'table') {
                    const headerCells = block.header || [];
                    return (
                        <div key={`table-${blockIndex}`} className="overflow-x-auto">
                            <table className={tableClasses}>
                                <thead className="bg-gray-100 text-gray-800">
                                    <tr>
                                        {headerCells.map((cell, cellIndex) => (
                                            <th
                                                key={`header-${blockIndex}-${cellIndex}`}
                                                className="px-3 py-2 text-left font-semibold border-b border-gray-200"
                                            >
                                                {cell}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {block.rows.map((row, rowIndex) => {
                                        const normalizedRow = headerCells.map((_, cellIndex) => row[cellIndex] || '');
                                        const rowClasses = rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50';

                                        return (
                                            <tr key={`row-${blockIndex}-${rowIndex}`} className={rowClasses}>
                                                {normalizedRow.map((cell, cellIndex) => (
                                                    <td
                                                        key={`cell-${blockIndex}-${rowIndex}-${cellIndex}`}
                                                        className="px-3 py-2 border-b border-gray-100"
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                }

                return (
                    <p
                        key={`text-${blockIndex}`}
                        className="whitespace-pre-line"
                    >
                        {block.text}
                    </p>
                );
            })}
        </div>
    );
}

NewsContent.propTypes = {
    content: PropTypes.string,
    textClassName: PropTypes.string,
    tableClassName: PropTypes.string
};
