import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addComment, fetchComments, fetchDishes } from '../../redux/actionCreator';
import DishDetails from './dishDetails';
import DisplayDishDetails from './displayDishDetails';
import Loader from './loader';
import MenuItem from './menuItem';

const mapStateToComponent = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch (fetchComments())
    }
}

class Menu extends Component {
    state = {
        selectedDish: null,
        modalIsOpen: false
    }

    dishDetailsShow = dish => {
        this.setState({ selectedDish: dish })
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({ modalIsOpen: !this.state.modalIsOpen })
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        if (this.props.dishes.isLoading) {
            return (
                <Loader />
            )
        } else {
            document.title = 'Menu | Rajmohol Restaurant';
            let menu = this.props.dishes.dishes.map(item => {
                return (
                    <MenuItem dish={item} key={item.id} detailsShow={() => this.dishDetailsShow(item)} />
                )
            })


            let details = null;
            if (this.state.selectedDish != null) {
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id)
                details = <DishDetails 
                dish={this.state.selectedDish}
                comments={comments} 
                addComment={this.props.addComment}
                commentIsLoading= {this.props.comments.isLoading} />
            }

            return (
                <div className="container">
                    <h1>Menu</h1>
                    <div className="row">
                        {menu}
                    </div>
                    <DisplayDishDetails isOpen={this.state.modalIsOpen} onClick={this.toggleModal} dishDetails={details} />
                </div>
            )
        }
    }
}

export default connect(mapStateToComponent, mapDispatchToProps)(Menu);