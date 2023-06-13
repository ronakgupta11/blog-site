const featured = {
  name: 'featured',
  title: 'Featured list',
  type: 'document',
  fields: [
    {
      name: 'post',
      title: 'Add Post',
      type: 'reference',
      to:{type:"post"}

    },
    
  ],

}
export default featured