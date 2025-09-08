import { EditorView, basicSetup } from '@codemirror/basic-setup';
import { EditorState } from '@codemirror/state';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useEffect, useRef } from 'react';
import {
  getInitialCode,
  getLanguageExtension,
} from '../../utility/helpers/handleCodeEditorLang';

export default function Editor({ initialLang = 'python', onChange }) {
  const editorRef = useRef(null);
  const viewRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !viewRef.current) {
      const state = EditorState.create({
        doc: getInitialCode(initialLang),
        extensions: [
          basicSetup,
          getLanguageExtension(initialLang),
          dracula,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              onChange(update.state.doc.toString());
            }
          }),
        ],
      });

      const view = new EditorView({
        state,
        parent: editorRef.current,
      });

      viewRef.current = view;
    }

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (viewRef.current) {
      const newExtension = getLanguageExtension(initialLang);
      const transaction = viewRef.current.state.update({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: getInitialCode(initialLang),
        },
        reconfigure: true,
        extensions: [
          basicSetup,
          newExtension,
          dracula,
          EditorView.updateListener.of((update) => {
            if (update.docChanged) {
              onChange(update.state.doc.toString());
            }
          }),
        ],
      });
      viewRef.current.dispatch(transaction);
    }
  }, [initialLang]);

  return (
    <div
      ref={editorRef}
      className="w-full h-full pt-1 pl-1 overflow-auto text-sm text-left text-black bg-gray-100 border border-gray-200 rounded-sm resize-none inset-shadow-2xs"
      onChange={onChange}
    />
  );
}
