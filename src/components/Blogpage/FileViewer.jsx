// import { useState } from 'react';
// import MonacoEditor from '@monaco-editor/react';
// import { Copy, Check, Download } from 'lucide-react';
// import ReactMarkdown from 'react-markdown';

// const FileViewer = ({ file }) => {
//     const [isCopied, setIsCopied] = useState(false);

//     const getFileLanguage = (fileName) => {
//         const ext = fileName.split('.').pop()?.toLowerCase() || '';
//         const languageMap = {
//             'py': 'python',
//             'ipynb': 'json',
//             'js': 'javascript',
//             'jsx': 'javascript',
//             'ts': 'typescript',
//             'tsx': 'typescript',
//             'html': 'html',
//             'css': 'css',
//             'json': 'json',
//             'md': 'markdown',
//             'cpp': 'cpp',
//             'c': 'c',
//             'java': 'java'
//         };
//         return languageMap[ext] || 'plaintext';
//     };

//     const handleCopy = () => {
//         navigator.clipboard.writeText(file.content);
//         setIsCopied(true);
//         setTimeout(() => setIsCopied(false), 2000);
//     };

//     const handleDownload = () => {
//         const blob = new Blob([file.content], { type: 'text/plain' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = file.name;
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//     };

//     const renderNotebook = () => {
//         try {
//             const notebookContent = typeof file.content === 'string'
//                 ? JSON.parse(file.content)
//                 : file.content;

//             if (!notebookContent?.cells) {
//                 return <div className="p-6 text-red-400">Invalid Notebook Structure</div>;
//             }

//             return (
//                 <div className="p-6 space-y-8">
//                     {notebookContent.cells.map((cell, idx) => {
//                         const content = Array.isArray(cell.source) ? cell.source.join('') : cell.source || '';

//                         if (cell.cell_type === 'markdown') {
//                             return (
//                                 <div key={idx} className="bg-[#252525]  p-2 rounded-md border border-gray-700">
//                                     <div className=" markdown-cell">
//                                         <ReactMarkdown>{content}</ReactMarkdown>
//                                     </div>
//                                 </div>
//                             );
//                         }

//                         if (cell.cell_type === 'code') {
//                             return (
//                                 <div
//                                     key={idx}
//                                     className="flex flex-col space-y-2 bg-[#1e1e1e] p-4 rounded-md border border-gray-700"
//                                 >
//                                     {/* Execution Count */}
//                                     <div className="flex items-start gap-4">
//                                         <div className="text-gray-400 text-xs pt-2 min-w-[60px] text-right">
//                                             In [{cell.execution_count ?? idx + 1}]:
//                                         </div>

//                                         {/* Code Area */}
//                                         <div className="flex-1">
//                                             <MonacoEditor
//                                                 height={Math.min(content.trim().split('\n').length * 14 + 60, 500) + 'px'}
//                                                 language="python"
//                                                 value={content}
//                                                 theme="vs-dark"
//                                                 options={{
//                                                     readOnly: true,
//                                                     minimap: { enabled: false },
//                                                     fontSize: 14,
//                                                     wordWrap: 'on',
//                                                     automaticLayout: true,
//                                                     scrollbar: { vertical: 'hidden', horizontal: 'hidden' }
//                                                 }}
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Outputs */}
//                                     {cell.outputs && cell.outputs.length > 0 && (
//                                         <div className="mt-2 ml-16 space-y-2">
//                                             {cell.outputs.map((output, outputIdx) => {
//                                                 if (output.output_type === 'stream') {
//                                                     return (
//                                                         <pre
//                                                             key={outputIdx}
//                                                             className="bg-black/30 text-white/80 p-2 rounded text-sm overflow-x-auto"
//                                                         >
//                                                             {output.text.join('')}
//                                                         </pre>
//                                                     );
//                                                 } else if (output.output_type === 'error') {
//                                                     return (
//                                                         <pre
//                                                             key={outputIdx}
//                                                             className="bg-red-900/40 text-red-300 p-2 rounded text-sm overflow-x-auto"
//                                                         >
//                                                             {output.traceback?.join('\n')}
//                                                         </pre>
//                                                     );
//                                                 }
//                                                 return null;
//                                             })}
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         }

//                         return null;
//                     })}
//                 </div>
//             );
//         } catch (error) {
//             console.error("Notebook parse error:", error);
//             return <div className="p-6 text-red-400">Error parsing notebook file</div>;
//         }
//     };

//     const renderContent = () => {
//         const ext = file.name.split('.').pop().toLowerCase();

//         if (["png", "jpg", "jpeg", "gif"].includes(ext)) {
//             return (
//                 <div className="flex justify-center p-6">
//                     <img src={file.content} alt={file.name} className="max-h-[70vh] rounded shadow-lg" />
//                 </div>
//             );
//         }

//         if (["ppt", "pptx"].includes(ext)) {
//             return (
//                 <div className="flex flex-col items-center justify-center p-10">
//                     <div className="text-center text-lg text-gray-300 mb-4">
//                         📄 PPT File: {file.name}
//                     </div>
//                     <a
//                         href={file.content}
//                         download={file.name}
//                         className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                     >
//                         Download Presentation
//                     </a>
//                 </div>
//             );
//         }

//         if (ext === 'ipynb') {
//             return renderNotebook();
//         }

//         return (
//             <div className="h-[calc(100vh-12rem)]">
//                 <MonacoEditor
//                     height="100%"
//                     language={getFileLanguage(file.name)}
//                     value={file.content}
//                     theme="vs-dark"
//                     options={{
//                         readOnly: true,
//                         minimap: { enabled: false },
//                         scrollBeyondLastLine: false,
//                         fontSize: 14,
//                         wordWrap: 'on',
//                         automaticLayout: true,
//                         lineNumbers: 'on',
//                         scrollbar: { vertical: 'visible', horizontal: 'visible' }
//                     }}
//                 />
//             </div>
//         );
//     };

//     return (
//         <div className="flex flex-col h-full bg-[#1e1e1e]">
//             {/* Top Bar */}
//             <div className="flex justify-between items-center p-4 border-b border-gray-700">
//                 <div className="flex items-center gap-2 text-gray-300">
//                     {file.icon}
//                     {file.name}
//                 </div>
//                 <div className="flex gap-2">
//                     <button
//                         onClick={handleCopy}
//                         className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-700 rounded hover:bg-gray-700"
//                     >
//                         {isCopied ? <Check size={16} /> : <Copy size={16} />}
//                         Copy
//                     </button>
//                     <button
//                         onClick={handleDownload}
//                         className="flex items-center gap-2 px-3 py-1.5 text-sm border border-gray-700 rounded hover:bg-gray-700"
//                     >
//                         <Download size={16} />
//                         Download
//                     </button>
//                 </div>
//             </div>

//             {/* File Content */}
//             <div className="flex-1 overflow-auto">
//                 {renderContent()}
//             </div>
//         </div>
//     );
// };

// export default FileViewer;
import { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Copy, Check, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const FileViewer = ({ file }) => {
    const [isCopied, setIsCopied] = useState(false);

    const getFileLanguage = (fileName) => {
        const ext = fileName.split('.').pop()?.toLowerCase() || '';
        const languageMap = {
            'py': 'python',
            'ipynb': 'json',
            'js': 'javascript',
            'jsx': 'javascript',
            'ts': 'typescript',
            'tsx': 'typescript',
            'html': 'html',
            'css': 'css',
            'json': 'json',
            'md': 'markdown',
            'cpp': 'cpp',
            'c': 'c',
            'java': 'java'
        };
        return languageMap[ext] || 'plaintext';
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(file.content);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([file.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const renderNotebook = () => {
        try {
            const notebookContent = typeof file.content === 'string'
                ? JSON.parse(file.content)
                : file.content;

            if (!notebookContent?.cells) {
                return <div className="p-4 sm:p-6 text-red-400">Invalid Notebook Structure</div>;
            }

            return (
                <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                    {notebookContent.cells.map((cell, idx) => {
                        const content = Array.isArray(cell.source) ? cell.source.join('') : cell.source || '';

                        if (cell.cell_type === 'markdown') {
                            return (
                                <div key={idx} className="bg-[#252525] p-3 sm:p-4 rounded-md border border-gray-700">
                                    <div className="markdown-cell prose prose-invert max-w-none">
                                        <ReactMarkdown>{content}</ReactMarkdown>
                                    </div>
                                </div>
                            );
                        }

                        if (cell.cell_type === 'code') {
                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col space-y-2 bg-[#1e1e1e] p-3 sm:p-4 rounded-md border border-gray-700"
                                >
                                    {/* Execution Count */}
                                    <div className="flex items-start gap-2 sm:gap-4">
                                        <div className="text-gray-400 text-xs pt-2 min-w-[40px] sm:min-w-[60px] text-right flex-shrink-0">
                                            In [{cell.execution_count ?? idx + 1}]:
                                        </div>

                                        {/* Code Area */}
                                        <div className="flex-1 min-w-0">
                                            <MonacoEditor
                                                height={Math.min(content.trim().split('\n').length * 14 + 60, 400) + 'px'}
                                                language="python"
                                                value={content}
                                                theme="vs-dark"
                                                options={{
                                                    readOnly: true,
                                                    minimap: { enabled: false },
                                                    fontSize: window.innerWidth < 768 ? 12 : 14,
                                                    wordWrap: 'on',
                                                    automaticLayout: true,
                                                    scrollbar: {
                                                        vertical: 'auto',
                                                        horizontal: 'auto',
                                                        verticalScrollbarSize: 8,
                                                        horizontalScrollbarSize: 8
                                                    },
                                                    lineNumbers: window.innerWidth < 768 ? 'off' : 'on'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Outputs */}
                                    {cell.outputs && cell.outputs.length > 0 && (
                                        <div className="mt-2 ml-10 sm:ml-16 space-y-2">
                                            {cell.outputs.map((output, outputIdx) => {
                                                if (output.output_type === 'stream') {
                                                    return (
                                                        <pre
                                                            key={outputIdx}
                                                            className="bg-black/30 text-white/80 p-2 rounded text-xs sm:text-sm overflow-x-auto"
                                                        >
                                                            {output.text.join('')}
                                                        </pre>
                                                    );
                                                } else if (output.output_type === 'error') {
                                                    return (
                                                        <pre
                                                            key={outputIdx}
                                                            className="bg-red-900/40 text-red-300 p-2 rounded text-xs sm:text-sm overflow-x-auto"
                                                        >
                                                            {output.traceback?.join('\n')}
                                                        </pre>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return null;
                    })}
                </div>
            );
        } catch (error) {
            console.error("Notebook parse error:", error);
            return <div className="p-4 sm:p-6 text-red-400">Error parsing notebook file</div>;
        }
    };

    const renderContent = () => {
        const ext = file.name.split('.').pop().toLowerCase();

        if (["png", "jpg", "jpeg", "gif"].includes(ext)) {
            return (
                <div className="flex justify-center p-4 sm:p-6">
                    <img
                        src={file.content}
                        alt={file.name}
                        className="max-w-full max-h-[60vh] sm:max-h-[70vh] rounded shadow-lg object-contain"
                    />
                </div>
            );
        }

        if (["ppt", "pptx"].includes(ext)) {
            return (
                <div className="flex flex-col items-center justify-center p-6 sm:p-10">
                    <div className="text-center text-base sm:text-lg text-gray-300 mb-4">
                        📄 PPT File: {file.name}
                    </div>
                    <a
                        href={file.content}
                        download={file.name}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                    >
                        Download Presentation
                    </a>
                </div>
            );
        }

        if (ext === 'ipynb') {
            return renderNotebook();
        }

        return (
            <div className="h-[calc(100vh-8rem)] sm:h-[calc(100vh-12rem)]">
                <MonacoEditor
                    height="100%"
                    language={getFileLanguage(file.name)}
                    value={file.content}
                    theme="vs-dark"
                    options={{
                        readOnly: true,
                        minimap: { enabled: window.innerWidth >= 1024 },
                        scrollBeyondLastLine: false,
                        fontSize: window.innerWidth < 768 ? 12 : 14,
                        wordWrap: 'on',
                        automaticLayout: true,
                        lineNumbers: window.innerWidth < 768 ? 'off' : 'on',
                        scrollbar: {
                            vertical: 'visible',
                            horizontal: 'visible',
                            verticalScrollbarSize: window.innerWidth < 768 ? 8 : 12,
                            horizontalScrollbarSize: window.innerWidth < 768 ? 8 : 12
                        }
                    }}
                />
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full bg-[#1e1e1e]">
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 border-b border-gray-700 gap-3 sm:gap-0">
                <div className="flex items-center gap-2 text-gray-300 min-w-0">
                    <span className="flex-shrink-0">{file.icon}</span>
                    <span className="truncate">{file.name}</span>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button
                        onClick={handleCopy}
                        className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm border border-gray-700 rounded hover:bg-gray-700 flex-1 sm:flex-none"
                    >
                        {isCopied ? <Check size={14} /> : <Copy size={14} />}
                        <span className="hidden sm:inline">Copy</span>
                    </button>
                    <button
                        onClick={handleDownload}
                        className="flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm border border-gray-700 rounded hover:bg-gray-700 flex-1 sm:flex-none"
                    >
                        <Download size={14} />
                        <span className="hidden sm:inline">Download</span>
                    </button>
                </div>
            </div>

            {/* File Content */}
            <div className="flex-1 overflow-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default FileViewer;