import './App.css';
import Gif from './Gif';

function App() {
  const image_array = [
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403", //고양이
    "https://cdn.pixabay.com/photo/2018/05/13/16/57/dog-3397110__480.jpg",
    "https://assets.petco.com/petco/image/upload/f_auto,q_auto/rabbit-care-sheet", //토끼
    "https://image.shutterstock.com/image-photo/chipmunk-stuffing-food-into-mouth-260nw-655690936.jpg", //다람쥐
    "https://item.kakaocdn.net/do/c9230634b95167d3f4c177bb02c9f73d4022de826f725e10df604bf1b9725cfd", //죠르디
  ];

  const image_array2 = [
    "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403", //고양이
    "https://item.kakaocdn.net/do/c9230634b95167d3f4c177bb02c9f73d4022de826f725e10df604bf1b9725cfd", //죠르디
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Gif image_array={image_array} delay={500}/>
        <Gif image_array={image_array2} delay={10000}/>
      </header>
    </div>
  );
}

export default App;
