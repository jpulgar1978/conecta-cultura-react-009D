function TarjetaActividad({dato}) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h2 className="h5">{dato.nombre}</h2>
        <p className="card-text">{dato.descripcion}</p>
        <button className="btn btn-primary">Ver actividad</button>
      </div>
    </article>
  );
}

export default TarjetaActividad;
