import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './index.css'

class Yoga extends Component {
  state = {yogaList: [], isLoading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://yoga-api-nzy4.onrender.com/v1/poses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    // console.log(data)
    const updatedData = data.map(each => ({
      id: each.id,
      englishName: each.english_name,
      sanskritNameAdopted: each.sanskrit_name_adopted,
      translationName: each.translation_name,
      poseDescription: each.pose_description,
      poseBenefits: each.pose_benefits,
      url: each.url_svg,
    }))
    this.setState({yogaList: updatedData, isLoading: false})
  }

  render() {
    const {yogaList, isLoading} = this.state
    // console.log(yogaList)
    return (
      <div>
        <div>
          <h1 className="yoga-el">Yoga</h1>
          <ul className="ul-container">
            {isLoading && <Loader type="Oval" color="#1a75ff" />}
            {yogaList.map(eachItem => (
              <Link
                to={`/poses/${eachItem.id}`}
                style={{
                  paddingLeft: 13,
                  textDecoration: 'none',
                  color: '#000000',
                }}
              >
                <li key={eachItem.id} className="li-el">
                  <div>
                    <h1 className="name-el">Name: {eachItem.englishName}</h1>
                    <h1 className="name-el">
                      English Name: {eachItem.englishName}
                    </h1>
                  </div>
                  <div>
                    <img
                      src={eachItem.url}
                      alt={eachItem.englishName}
                      className="img-el"
                    />
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Yoga
