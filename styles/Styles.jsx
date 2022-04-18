const Styles = () => {
    const contactModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#eee',
        boxShadow: 24,
        p: 5,
        borderRadius: 2,
    }

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

    const certificateModalStyle = {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 750,
        bgcolor: '#eee',
        boxShadow: 25,
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 0
    };

    return {
        contactModalStyle,
        projectModalStyle,
        imageModalStyle,
        certificateModalStyle
    }
}

export default Styles;