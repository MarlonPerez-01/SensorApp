export const obtener = async () => {
  try {
    const res = await fetch(`http://127.0.0.1:8080/temperatura`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const datos = await res.json();
    return datos;
  } catch (err) {
    console.log(err);
    return err;
  }
};
