import {connect} from 'react-redux'
import Home from '../Components/Home';
import {addToCart} from '../Services/Actions/Actions'


 const mapStateToProps=state=>({

    data:state.cardItems

 })
 const mapDispatchToProps = {
    addToCart
 }
export default connect(mapStateToProps,mapDispatchToProps)(Home)


//  export default Home;