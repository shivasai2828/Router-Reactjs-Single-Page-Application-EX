import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {id, title, description, publishedDate} = eachList
  return (
    <li>
      <div className="name-with-date-con">
        <h1 className="heading">{title}</h1>
        <p className="paras">{publishedDate}</p>
      </div>
      <p className="paras">{description}</p>
    </li>
  )
}

export default BlogItem
