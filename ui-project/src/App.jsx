import Section1 from './components/section1/section1'

const users = [
  {
    img: 'https://i.pinimg.com/736x/fe/8c/11/fe8c1150c24283e5ae21aacd9aefecdd.jpg',
    intro: '',
    color: 'royalblue',
    tag: 'Satisfied'
  },
  {
    img: 'https://i.pinimg.com/736x/7a/ea/08/7aea08c5323513c0a4c28ff5cb4d5d14.jpg',
    color: 'lightseagreen',
    intro: '',
    tag: 'Underserved'
  },
  {
    img: 'https://i.pinimg.com/736x/19/a2/cb/19a2cb248436651b1ec7166472b1a1d5.jpg',
    color: 'orange',
    intro: '',
    tag: 'Underbanked'
  },
  {
    img: 'https://i.pinimg.com/1200x/29/df/3d/29df3d8a58d79d7ad37eb9d97caf297c.jpg',
    color: 'pink',
    intro: '',
    tag: 'Underwear'
  },
  {
    img: 'https://i.pinimg.com/736x/cd/f3/05/cdf305b24d934b0bbd31de03adf73886.jpg',
    intro: '',
    color: 'black',
    tag: 'Average'
  }
]

const App = () => {
  return (
    <div className='h-screen w-full '>
      <Section1 users={users} />
    </div>
  )
}

export default App 