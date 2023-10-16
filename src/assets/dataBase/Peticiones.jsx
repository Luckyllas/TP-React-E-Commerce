import axios from "axios";
import { useState, useEffect } from "react";


const Peticiones = () => {
  const baseURL = "db.json";
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/productos`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost(
    id,
    img,
    bodega,
    etiqueta,
    uva,
    region,
    tipo,
    precio,
    destacado,
    stock
  ) {
    axios
      .post(baseURL, {
        id: id,
        img: img,
        bodega: bodega,
        etiqueta: etiqueta,
        uva: uva,
        region: region,
        tipo: tipo,
        precio: precio,
        destacado: destacado,
        stock: stock,
      })
      .then((response) => {
        setPost(response.data);
      });

    function updatePost(cantidad) {
      axios
        .put(`${baseURL}/carrito`, {
          cantidad: cantidad,
        })
        .then((response) => {
          setPost(response.data);
        });
    }

    function deletePost(base, id) {
        axios
          .delete(`${baseURL}/`+base)
          .then(() => {
            alert("Post deleted!");
            setPost(null)
          });
      }
  };

  if (!post) return "No post!"
};

export default Peticiones;