import { Serializer as CatSerializer } from
  '../mixins/regenerated/serializers/i-i-s-lopa-cat';
import AnimalSerializer from './i-i-s-lopa-animal';

export default AnimalSerializer.extend(CatSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
