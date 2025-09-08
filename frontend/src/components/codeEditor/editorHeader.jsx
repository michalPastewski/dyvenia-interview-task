import { CodeIcon} from '@radix-ui/react-icons';
import * as Select from '@radix-ui/react-select';
import React from 'react';
import {getFileName} from '../../utility/helpers/handleCodeEditorLang';

export default function EditorHeader({ language, setLanguage }) {
  return (
    <section className="flex justify-between w-full py-2 border-b border-gray-300 bg-gray-50">
      <h2 className="flex items-center gap-2 px-6">
        <CodeIcon />
        {getFileName(language)}
      </h2>
      <div className="px-4">
        <Select.Root onValueChange={setLanguage} value={language}>
          <Select.Trigger
            className="flex items-center justify-between w-full px-2 py-1 text-sm text-black border border-gray-200 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-[#9484e3] min-w-32"
            aria-label="Select language"
            radius="small"
            color="indigo">
            <Select.Value />
            <Select.Icon className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              className="w-32 overflow-hidden border border-gray-200 rounded-md shadow-sm bg-gray-50 text-gray-950"
              position="popper"
              sideOffset={5}>
              <Select.Viewport className="p-1">
                <Select.Group>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="cpp">C++</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                </Select.Group>
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </section>
  );
}

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className="text-sm p-2 rounded-sm cursor-pointer hover:bg-[#13c0d1] data-[highlighted]:bg-[#13c0d1] data-[state=checked]:text-[#9484e3] focus:outline-none"
      {...props}
      ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});
