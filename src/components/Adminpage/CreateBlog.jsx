import React, { useCallback, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import uploadImageToCloudinary from "../../Utils/cloundinaryUpload";

const CreateBlog = () => {
  const [isUploading, setIsUploading] = useState(false);
  const quill = useRef();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  console.log(content);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    imgUrl: "",
  });
  const handleChange = async (e) => {
    const { name, type, value } = e.target;
    if (type == "file") {
      try {
        setIsUploading(true);
        const file = e.target.files[0];
        const url = await uploadImageToCloudinary(file);
        setFormData({ ...formData, [name]: url });
      } catch (error) {
        console.error("Error uploading image", error);
      } finally {
        setIsUploading(false);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];

      try {
        // Upload image to Cloudinary
        const imageUrl = await uploadImageToCloudinary(file);

        // Get the Quill editor instance
        const quillEditor = quill.current.getEditor();

        // Insert the image at the current cursor position
        quillEditor.clipboard.dangerouslyPasteHTML(
          quillEditor.getSelection(true).index,
          `<img src="${imageUrl}" alt="Uploaded Image" />`
        );
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  }, []);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
          ["code-block"],
          ["code"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
    "code-block",
    "code",
    "size",
  ];
  console.log(formData);
  return (
    <div className="align-center justify-center ">
      <div>
        <div className="pt-3 flex align-center justify-center border-b border-gray-700 pb-[60px]">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="border-2 border-gray-300 hover:gap-5 text-zinc-900 font-bold py-2 px-8 rounded  flex gap-4"
            onClick={() => navigate(`/`)}
          >
            <div className="ml-1">Go Back</div>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div className="flex align-center justify-center gap-5 pt-9">
        <div className="w-1/2 border-2 border-gray-300 m-6 ">
          <h2 className="text-center text-3xl font-bolder pb-1">Blog Editor</h2>
          <hr />
          <div className="w-[97%] ">
            <h3 className="p-2 text-lg font-bold">Blog title</h3>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border-2 border-gray-300 p-1 h-[2.5rem] w-full m-3"
            />
          </div>
          <div className="w-[97%]">
            <h3 className="p-2 text-lg font-bold">Blog Description</h3>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full m-3 border-2 border-gray-300 p-1 h-[8rem]"
            />
          </div>
          <div className="w-[97%]">
            <h3 className="p-2 text-lg font-bold">Blog image</h3>
            <input
              type="file"
              id="imgUrl"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleChange}
              className="border-2 border-gray-300 p-1 h-[2.5rem] w-full m-3"
            />
          </div>
          <div className="w-[97%] mb-2 m-3">
            <ReactQuill
              ref={(el) => (quill.current = el)}
              theme="snow"
              value={content}
              onChange={(value) => setContent(value)}
              formats={formats}
              modules={modules}
            />
          </div>
        </div>
        <div className="w-1/2 border-2 border-gray-300 m-6 ">
          <h2 className="text-center text-3xl font-bolder pb-1">Blog View</h2>
          <hr />
          <div className="w-[97%]">
            <h3 className="p-2 text-lg font-bold">Blog title</h3>
            <div className="p-1 h-[2.5rem] w-full m-3">
              <h2>{formData?.title}</h2>
            </div>
            <hr />
            <h3 className="p-2 text-lg font-bold">Blog Description</h3>
            <div className="p-1  w-full m-3">
              <p>{formData?.description}</p>
            </div>
            <h3 className="p-2 text-lg font-bold">Blog Content</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
