import React, { useEffect } from 'react'
import Layout from '../components/Layout/index'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../actions';
import AddIcon from '@material-ui/icons/Add';
import "./category.scss"
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { Accordion, Card , Table , Form,Button} from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
/**
* @author
* @function Category
**/

const Category = (props) => {

  const category = useSelector(state => state.category)
  console.log(category)

  const dispach = useDispatch();
  useEffect(() => {
    dispach(getAllCategory())
  }, [])

  const renderCategories = (categories) => {
    let Mycategories = []
    for (let category of categories) {
      Mycategories.push(
      <tbody key={category.name}>
          <tr>
            <td>{category._id}</td>
            <td>{category.name}</td>
            <td><EditIcon /></td>
            <td><DeleteIcon /></td>
          </tr>
          {category.children.length >0 ? renderCategoriesChildren(category.children): null }
      </tbody>
      );
    }
    return Mycategories;
  }
  const renderCategoriesChildren = (categories) => {
    let Mycategories = []
    for (let category of categories) {
      Mycategories.push(
          <tr key={category.name}>
            <td>{category._id}</td>
            <td>{category.name}</td>
            <td><EditIcon /></td>
            <td><DeleteIcon /></td>
          </tr>          
      );
    }
    return Mycategories;
  }


  return (
    <div className="category">
      <Layout />
      <div className="block_page">
        <div className="header_bar"></div>
        <div className="title_page">
          <div>
            <h3>Categories</h3>
            <p>Show and add categories to your website.</p>
          </div>

          <div className="Contain_categ_and_product">
            <Card className="Card2">
              <Card.Body>
              <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Category Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                    {renderCategories(category.categories)}
                </Table>
              </Card.Body>
            </Card>
            {/* FORM */}

            <div className="card_form">
            <Card className="Card">
              <Card.Body>
                <Card.Title>Add a category</Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="category Name" />
                      <Form.Text className="text-muted">
                        
                      </Form.Text>
                    </Form.Group>
                  </Form>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%' }}>Submit</Button>
              </Card.Body>
            </Card>
            <Card className="Card">
              <Card.Body>
                <Card.Title>Add sub category </Card.Title>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="text" placeholder="Parent ID" />
                      <Form.Text className="text-muted">
                        Take the id of the Parent Category
                      </Form.Text>
                      <Form.Control type="email" placeholder="category Name" />
                    </Form.Group>
                  </Form>
                </Card.Text>
                <Button variant="primary" style={{ width: '100%' }}>Submit</Button>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Category