var Page = React.createClass({
    render: function () {
        return (
            <myElement>
                < Nav title="React" linkUrl="index.html"/>
                <div className="container">
                    <Title title="My Component Title"/>
                    <div className="row">
                        <Form/>
                        < Button title="Send" textActive="Loading..."/>
                    </div>
                </div>
            </myElement>
        );
    }
});


ReactDOM.render(
    < Page />,
    document.getElementById('page')
);