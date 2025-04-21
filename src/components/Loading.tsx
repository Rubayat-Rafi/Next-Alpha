import React from 'react';

type LoadingProps = {
    style?: string;
};

const Loading: React.FC<LoadingProps> = ({ style }) => {
    return (
        <>
            <div className={`skeleton ${style}`}></div>
        </>
    );
};

export default Loading;