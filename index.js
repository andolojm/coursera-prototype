import store from './src/reducer'
import TabbedPage from './src/components/tabbedpage'

const App = React.createClass({
    render: function(){
        return (
            <ReactRedux.Provider store={store}>
                <TabbedPage />
            </ReactRedux.Provider>
        )
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
