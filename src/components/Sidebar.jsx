import { Fragment } from "react";

function Sidebar({ folders, selectedFolder, onSelect, chats }) {

const renderIcon = (id) => {
    if (id === "open") {
      
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 shadow-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 
            0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 
            0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 
            0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      );
    } else if (id === "waiting") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 -translate-x-6 shadow-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 
            4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      );
    }
    return null;
  };

  return (
   <div className="font-bold justify-between flex my-2 text-sm items-center mx-auto" style={{ width: 200 }}>
  <p className="mr-1 text-xs">{chats.length}</p>
  {folders.map((f) => {
    const isSelected = selectedFolder === f.id;

    return (
      <div key={f.id}>
        <div className="inline-flex -translate-x-2 items-center">
          <div
            onClick={() => onSelect(f.id)}
            className={`h-6 text-xs cursor-pointer rounded text-center mt-0 py-1 px-2 transition-colors
              ${isSelected ? 'bg-[whitesmoke] text-black' : 'hover:bg-blue-200 hover:text-gray-500'}
            `}
          >
            {f.label}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>

        <div
          className={`fixed bottom-10 cursor-pointer transition-colors ${
            isSelected ? 'bg-[#eee]' : 'bg-white'
          }`}
        >
          {renderIcon(f.id)}
        </div>
      </div>
    );
  })}
</div>

  );
}

export default Sidebar