import React, { useState } from "react";
import styled from 'styled-components'
// npm i @uiw/react-codemirror
import CodeMirror from '@uiw/react-codemirror'
// npm i @uiw/codemirror-theme-bespin @uiw/codemirror-theme-duotone @uiw/codemirror-theme-dracula @uiw/codemirror-theme-github @uiw/codemirror-theme-xcode @uiw/codemirror-theme-vscode @uiw/codemirror-theme-okaidia

// theme
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { bbedit } from '@uiw/codemirror-theme-bbedit'

// npm i @codemirror/lang-cpp @codemirror/lang-java @codemirror/lang-javascript @codemirror/lang-python

// language
import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'

//configuration
import { indentUnit } from '@codemirror/language'
import { EditorState } from '@codemirror/state'

const Playground = () => {
  const [theme, setTheme] = useState(vscodeDark)
  const [language, setLanguage] = useState(javascript);

  return (
    <div className="mt-16 mx-2 grid grid-cols-2 text-white bg-neutral-900 ml-12">
      <div id="code" className="flex h-96 max-h-96 col-span-2">
      <CodeMirror
            className="w-screen"
            // value={currentCode}
            height="100%"
            width=""
            theme={theme}
            extensions={[
                language,
                indentUnit.of("        "),
                EditorState.tabSize.of(8),
                EditorState.changeFilter.of(() => true)
            ]}
            onChange={(value) => setCurrentCode(value)}
            basicSetup={{
                lineNumbers: true,
                highlightActiveLineGutter: true,
                highlightSpecialChars: true,
                history: true,
                foldGutter: true,
                drawSelection: true,
                dropCursor: true,
                allowMultipleSelections: true,
                indentOnInput: true,
                syntaxHighlighting: true,
                bracketMatching: true,
                closeBrackets: true,
                autocompletion: true,
                rectangularSelection: true,
                crosshairCursor: true,
                highlightActiveLine: true,
                highlightSelectionMatches: true,
                closeBracketsKeymap: true,
                defaultKeymap: true,
                searchKeymap: true,
                historyKeymap: true,
                foldKeymap: true,
                completionKeymap: true,
                lintKeymap: true,
            }}
        />
      </div>
      <div
        id="input"
        className=" h-52 col-span-1 border border-neutral-800 underline"
      >
        Input
      </div>
      <div
        id="output"
        className=" h-52 col-span-1 border border-neutral-800 underline"
      >
        Output
      </div>
    </div>
  );
};

export default Playground;
