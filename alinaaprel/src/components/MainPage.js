import Header from './Header';

const headerTitle = "Окунись в мир, созданный мной";
const headerMenu = ['обо мне', 'проекты', 'опыт', 'хобби'];

function MainPage() {
  return (
    <Header title={headerTitle} menu={headerMenu} />
  );
}

export default MainPage;