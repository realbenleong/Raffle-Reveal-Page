import React from 'react';
import './Card.css';

function Card(props)
{
    var { children } = props;

    var loading = false;
    if (('loading' in props) &&
        (props.loading === true))
    {
        loading = true;
    }

    var loadingText = '';
    if ((typeof (props.loadingText) === 'string') &&
        (props.loadingText.length > 0))
    {
        loadingText = props.loadingText;
    }

    return (
        <div className='appkit-card'>
            {children}
        </div>
    );
}
Card.Header = function (props)
{
    var { left, right } = props;

    return (
        <div className='card-header'>
            <div className='card-left'>{left}</div>
            <div className='card-right'>{right}</div>
        </div>
    );
};
Card.Body = function (props)
{
    var { children, padding } = props;

    var withPadding = true;
    if ((typeof (padding) === 'boolean') &&
        (padding === false))
    {
        withPadding = false;
    }

    return (
        <div>
            {children}
        </div>
    );
}

export { Card };
