import FileCard from "./FileCard";

// components/FileGrid.js
export default function FileGrid() {
  const files = [
    {
      id: 1,
      title: "Untitled",
      description: "Edited 1 hour ago",
      type: "file",
      color: "bg-gradient-to-br from-blue-400 to-purple-500",
    },
    {
      id: 2,
      title: "Your Name Here",
      description: "",
      type: "file",
      color: "bg-gradient-to-br from-green-400 to-blue-500",
    },
    {
      id: 3,
      title: "Personal Portfolio Template (Comm...)",
      description: "Edited 10 days ago",
      type: "file",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      title: "Design",
      description: "Fig Jam Stides Buzz Site Make",
      type: "tags",
      color: "bg-gradient-to-br from-purple-400 to-pink-500",
    },
    {
      id: 5,
      title: "Fig Jam basics",
      description: "Failed 1 hour ago",
      type: "file",
      color: "bg-gradient-to-br from-red-400 to-pink-500",
    },
    {
      id: 6,
      title: "Build your own team library",
      description: "Pankaj Kumar's team library Edited 10 days ago",
      type: "library",
      color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    },
    {
      id: 7,
      title: "Figma basics",
      description: "Failed 1 hour ago",
      type: "file",
      color: "bg-gradient-to-br from-teal-400 to-green-500",
    },
    {
      id: 8,
      title: "Figma basics",
      description: "Failed 1 hour ago",
      type: "file",
      color: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-6">
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </>
  );
}
