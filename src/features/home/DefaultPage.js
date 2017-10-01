import React, { Component } from 'react'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/action';

const mapStateToProps = (state, ownProps) => ({
    home: state.home,
})

const mapDispatchToProps = (dispatch) =>({
    actions: bindActionCreators({ ...actions }, dispatch)
})

class DefaultPage extends Component {
    render() {
        const{counterMinusOne, counterPlusOne, fetchList} = this.props.actions;
        const{topicList, count, fetchPending, fetchError} = this.props.home;
        return (
            <div>
                <button onClick={counterPlusOne}>+</button>
                <button onClick={counterMinusOne}>-</button>
                <button onClick={fetchList} disabled={fetchPending}>{fetchPending ? '正在获取中' : '获取数据'}</button>

                <div>{count}</div>
                <div>
                    {topicList.map(item=>(
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
                {
                    fetchError && <div>{fetchError.toString()}</div>
                }
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DefaultPage)