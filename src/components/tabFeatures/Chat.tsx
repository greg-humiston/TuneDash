type ChatProps = {
    dashId: number;
};

export const Chat = (props: ChatProps) => {
    const { dashId } = props;

	const dashData = { dashId };

	return (
		<div className="chat-container">
			Chat
		</div>
	);
};

export default Chat;