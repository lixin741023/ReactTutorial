import React from 'react';

class KnowLedgeList extends React.Component {
    constructor (props) {
        super(props);
    }
    renderLi () {
        const end = this.props.list.map((item, i) => {
            return (
                <li key={i}>{item}</li>
            )
        });
        return end;
    }
    render () {
        return (
            <ul className='bor'>
                {this.renderLi()}
            </ul>
        )
    }
}

export { KnowLedgeList };
