import './styles.css';

export const IconButton = (props) => {
    const { Icon, onClick, className, iconClassName } = props;

    return (
        <button onClick={onClick} className={className}>
            <Icon className={iconClassName}/>
        </button>
    );
};