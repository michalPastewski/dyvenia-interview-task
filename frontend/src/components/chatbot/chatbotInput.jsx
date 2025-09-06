import { PaperPlaneIcon } from '@radix-ui/react-icons';
import { IconButton, TextArea, Tooltip } from '@radix-ui/themes';

export default function ChatbotInput({
  value,
  onChange,
  handleSend,
  activateButton,
}) {
  return (
    <div className="relative p-4">
      <TextArea
        placeholder="Type your message..."
        radius="large"
        variant="classic"
        style={{ outlineColor: 'rgb(19, 192, 209)' }}
        value={value}
        onChange={onChange}
      />
      {activateButton ? (
        <IconButton
          size="1"
          style={{
            position: 'absolute',
            right: '2em',
            top: '2.5em',
            backgroundColor: 'rgb(19, 192, 209)',
          }}
          onClick={handleSend}>
          <PaperPlaneIcon />
        </IconButton>
      ) : (
        <Tooltip content="You have to write message to send it">
          <IconButton
            size="1"
            style={{
              position: 'absolute',
              right: '2em',
              top: '2.5em',
              outlineColor: 'rgb(19, 192, 209)',
              color: 'rgb(19, 192, 209)',
              backgroundColor: 'transparent',
              border: '1px solid rgb(19, 192, 209)',
            }}
            disabled>
            <PaperPlaneIcon />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
}
