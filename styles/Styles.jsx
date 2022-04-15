const Styles = () => {
    const projectModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: '#eee',
        boxShadow: 24,
        p: 5,
        borderRadius: 2,
        textAlign: 'center',
    };

    const imageModalStyle = {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: '#eee',
        boxShadow: 25,
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0,
        p: 0.5
    };
    
    return {
        projectModalStyle,
        imageModalStyle
    }
}

export default Styles;