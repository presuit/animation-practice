import Acordian, { IAcordianData } from "./components/Acordian";

const data: IAcordianData[] = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1643289228079-d5472b238d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1643148636641-fc498af944c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1643289952392-4dab0a495947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1445&q=80",
  },
  {
    id: 5,
    imgSrc:
      "https://images.unsplash.com/photo-1643302939031-bd19a64f480a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    imgSrc:
      "https://images.unsplash.com/photo-1643285803934-157d245e468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    imgSrc:
      "https://images.unsplash.com/photo-1528361237150-8a9a7df33035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 8,
    imgSrc:
      "https://images.unsplash.com/photo-1617870314635-fc819547ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

function App() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center px-10 flex-col gap-10">
      <div className="w-full h-[70vh]">
        <Acordian data={data} />
      </div>
    </div>
  );
}

export default App;
