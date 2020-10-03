import { EntityManager } from 'typeorm';
const funcionalidadesRolPermitido = async (
  manager: EntityManager,
  usuario: any,
) => {
  const select = `select f.* `;
  const from = `from rol r,rol_funcionalidad rf,funcionalidad f `;
  const where = `where r.id=${usuario.rolId} and r.id=rf.rol_id and 
                        rf.funcionalidad_id = f.id and rf.visible='${true}' `;

  const sql = select + from + where;
  console.log(sql);
  const respuesta = await manager.query(sql);
  console.log(respuesta);
  return respuesta;
};

export { funcionalidadesRolPermitido };
