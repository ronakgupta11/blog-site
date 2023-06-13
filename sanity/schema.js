import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import featured from './schemas/featured'

export const schema = {
  types: [post, featured, category, blockContent],
}
