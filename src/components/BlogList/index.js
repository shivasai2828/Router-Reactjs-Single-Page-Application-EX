import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul>
        {blogsList.map(eachList => (
          <BlogItem key={eachList.id} eachList={eachList} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
