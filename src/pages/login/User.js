import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
  const userJoin = {
       id: props.id,
       pw: props.pw,
       gender: props.gender,
       nick: props.nick,
       birth: [props.monthSelected, props.daySelected]
    }

    return (
    <div>{userJoin}</div>
  )
}
export default User
// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(User)