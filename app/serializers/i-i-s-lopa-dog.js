import { Serializer as DogSerializer } from
  '../mixins/regenerated/serializers/i-i-s-lopa-dog';
import AnimalSerializer from './i-i-s-lopa-animal';

export default AnimalSerializer.extend(DogSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
