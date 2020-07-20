import { Serializer as PawsSerializer } from
  '../mixins/regenerated/serializers/i-i-s-lopa-paws';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PawsSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
