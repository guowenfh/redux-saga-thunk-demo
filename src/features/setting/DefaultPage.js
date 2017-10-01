import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './redux/action';
const mapStateToProps = (state, ownProps) => ({
    setting: state.setting,
})
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    }
}
class DefaultPage extends Component {
    render() {
        console.error(this.props);

        const{counterPlusOneSaga, counterMinusOneSaga,  fetchListSaga} = this.props.actions;
        const {count, list, fetchPending} = this.props.setting;
        return (
            <div>
                <button onClick={counterPlusOneSaga}>+saga</button>
                <button onClick={counterMinusOneSaga}>-saga</button>
                <button onClick={fetchListSaga} disabled={fetchPending}>{fetchPending ? '正在获取中' : '获取数据saga'}</button>
                <div>{count}</div>
                <div>
                    {list.map(item=>(
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage)