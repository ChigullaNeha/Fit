import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class YogaDetails extends Component {
  state = {detailsList: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://yoga-api-nzy4.onrender.com/v1/poses?id=${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    // const updatedData = data.map(each => ({
    //   englishName: each.english_name,
    //   poseBenefits: each.pose_benefits,
    //   poseDescription: each.pose_description,
    //   url: each.url_png,
    // }))
    // this.setState({detailsList: updatedData})
    const updatedData = {
      englishName: data.english_name,
      poseBenefits: data.pose_benefits,
      poseDesctiption: data.pose_description,
      url: data.url_png,
    }
    this.setState({detailsList: updatedData, isLoading: false})
  }

  render() {
    const {detailsList, isLoading} = this.state
    const {englishName, poseBenefits, poseDesctiption, url} = detailsList
    console.log(detailsList)
    return (
      <div className="y-container">
        <div className="yoga-details-container">
          {isLoading && <Loader type="Oval" color="#1a75ff" />}
          <img src={url} alt={englishName} className="yoga-img" />
          <h1 className="details-name-el">Name: {englishName}</h1>
          <p>
            <span className="sub-text">Desctiption</span>: {poseDesctiption}
          </p>
          <p>
            <span className="sub-text">Benefits</span>:{poseBenefits}
          </p>
        </div>
      </div>
    )
  }
}
export default YogaDetails
