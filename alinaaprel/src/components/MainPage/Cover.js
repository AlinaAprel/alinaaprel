import '../../blocks/mainpage/Cover/Cover.css';
import coverImg from '../../images/cover-image.jpeg';

function Cover() {
  return (
    <div className="mainpage__cover">
      <img className="mainpage__image" src={coverImg} alt="cover"></img>
      <h1 className="mainpage__title">Мы живем, пока занимаемся свои любимым делом</h1>
    </div>
  );
}

export default Cover;