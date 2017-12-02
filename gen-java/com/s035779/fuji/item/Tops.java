/**
 * Autogenerated by Thrift Compiler (1.0.0-dev)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
package com.s035779.fuji.item;

@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked", "unused"})
@javax.annotation.Generated(value = "Autogenerated by Thrift Compiler (1.0.0-dev)", date = "2017-12-03")
public class Tops implements org.apache.thrift.TBase<Tops, Tops._Fields>, java.io.Serializable, Cloneable, Comparable<Tops> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("Tops");

  private static final org.apache.thrift.protocol.TField ASIN_FIELD_DESC = new org.apache.thrift.protocol.TField("ASIN", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField TITLE_FIELD_DESC = new org.apache.thrift.protocol.TField("Title", org.apache.thrift.protocol.TType.STRING, (short)2);
  private static final org.apache.thrift.protocol.TField ITEM_URL_FIELD_DESC = new org.apache.thrift.protocol.TField("ItemUrl", org.apache.thrift.protocol.TType.STRING, (short)3);
  private static final org.apache.thrift.protocol.TField CATEGORY_FIELD_DESC = new org.apache.thrift.protocol.TField("Category", org.apache.thrift.protocol.TType.STRING, (short)4);

  private static final org.apache.thrift.scheme.SchemeFactory STANDARD_SCHEME_FACTORY = new TopsStandardSchemeFactory();
  private static final org.apache.thrift.scheme.SchemeFactory TUPLE_SCHEME_FACTORY = new TopsTupleSchemeFactory();

  public java.lang.String ASIN; // required
  public java.lang.String Title; // required
  public java.lang.String ItemUrl; // required
  public java.lang.String Category; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    ASIN((short)1, "ASIN"),
    TITLE((short)2, "Title"),
    ITEM_URL((short)3, "ItemUrl"),
    CATEGORY((short)4, "Category");

    private static final java.util.Map<java.lang.String, _Fields> byName = new java.util.HashMap<java.lang.String, _Fields>();

    static {
      for (_Fields field : java.util.EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // ASIN
          return ASIN;
        case 2: // TITLE
          return TITLE;
        case 3: // ITEM_URL
          return ITEM_URL;
        case 4: // CATEGORY
          return CATEGORY;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new java.lang.IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    public static _Fields findByName(java.lang.String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final java.lang.String _fieldName;

    _Fields(short thriftId, java.lang.String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    public short getThriftFieldId() {
      return _thriftId;
    }

    public java.lang.String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  public static final java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    java.util.Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new java.util.EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.ASIN, new org.apache.thrift.meta_data.FieldMetaData("ASIN", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.TITLE, new org.apache.thrift.meta_data.FieldMetaData("Title", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.ITEM_URL, new org.apache.thrift.meta_data.FieldMetaData("ItemUrl", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.CATEGORY, new org.apache.thrift.meta_data.FieldMetaData("Category", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    metaDataMap = java.util.Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(Tops.class, metaDataMap);
  }

  public Tops() {
  }

  public Tops(
    java.lang.String ASIN,
    java.lang.String Title,
    java.lang.String ItemUrl,
    java.lang.String Category)
  {
    this();
    this.ASIN = ASIN;
    this.Title = Title;
    this.ItemUrl = ItemUrl;
    this.Category = Category;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public Tops(Tops other) {
    if (other.isSetASIN()) {
      this.ASIN = other.ASIN;
    }
    if (other.isSetTitle()) {
      this.Title = other.Title;
    }
    if (other.isSetItemUrl()) {
      this.ItemUrl = other.ItemUrl;
    }
    if (other.isSetCategory()) {
      this.Category = other.Category;
    }
  }

  public Tops deepCopy() {
    return new Tops(this);
  }

  @Override
  public void clear() {
    this.ASIN = null;
    this.Title = null;
    this.ItemUrl = null;
    this.Category = null;
  }

  public java.lang.String getASIN() {
    return this.ASIN;
  }

  public Tops setASIN(java.lang.String ASIN) {
    this.ASIN = ASIN;
    return this;
  }

  public void unsetASIN() {
    this.ASIN = null;
  }

  /** Returns true if field ASIN is set (has been assigned a value) and false otherwise */
  public boolean isSetASIN() {
    return this.ASIN != null;
  }

  public void setASINIsSet(boolean value) {
    if (!value) {
      this.ASIN = null;
    }
  }

  public java.lang.String getTitle() {
    return this.Title;
  }

  public Tops setTitle(java.lang.String Title) {
    this.Title = Title;
    return this;
  }

  public void unsetTitle() {
    this.Title = null;
  }

  /** Returns true if field Title is set (has been assigned a value) and false otherwise */
  public boolean isSetTitle() {
    return this.Title != null;
  }

  public void setTitleIsSet(boolean value) {
    if (!value) {
      this.Title = null;
    }
  }

  public java.lang.String getItemUrl() {
    return this.ItemUrl;
  }

  public Tops setItemUrl(java.lang.String ItemUrl) {
    this.ItemUrl = ItemUrl;
    return this;
  }

  public void unsetItemUrl() {
    this.ItemUrl = null;
  }

  /** Returns true if field ItemUrl is set (has been assigned a value) and false otherwise */
  public boolean isSetItemUrl() {
    return this.ItemUrl != null;
  }

  public void setItemUrlIsSet(boolean value) {
    if (!value) {
      this.ItemUrl = null;
    }
  }

  public java.lang.String getCategory() {
    return this.Category;
  }

  public Tops setCategory(java.lang.String Category) {
    this.Category = Category;
    return this;
  }

  public void unsetCategory() {
    this.Category = null;
  }

  /** Returns true if field Category is set (has been assigned a value) and false otherwise */
  public boolean isSetCategory() {
    return this.Category != null;
  }

  public void setCategoryIsSet(boolean value) {
    if (!value) {
      this.Category = null;
    }
  }

  public void setFieldValue(_Fields field, java.lang.Object value) {
    switch (field) {
    case ASIN:
      if (value == null) {
        unsetASIN();
      } else {
        setASIN((java.lang.String)value);
      }
      break;

    case TITLE:
      if (value == null) {
        unsetTitle();
      } else {
        setTitle((java.lang.String)value);
      }
      break;

    case ITEM_URL:
      if (value == null) {
        unsetItemUrl();
      } else {
        setItemUrl((java.lang.String)value);
      }
      break;

    case CATEGORY:
      if (value == null) {
        unsetCategory();
      } else {
        setCategory((java.lang.String)value);
      }
      break;

    }
  }

  public java.lang.Object getFieldValue(_Fields field) {
    switch (field) {
    case ASIN:
      return getASIN();

    case TITLE:
      return getTitle();

    case ITEM_URL:
      return getItemUrl();

    case CATEGORY:
      return getCategory();

    }
    throw new java.lang.IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new java.lang.IllegalArgumentException();
    }

    switch (field) {
    case ASIN:
      return isSetASIN();
    case TITLE:
      return isSetTitle();
    case ITEM_URL:
      return isSetItemUrl();
    case CATEGORY:
      return isSetCategory();
    }
    throw new java.lang.IllegalStateException();
  }

  @Override
  public boolean equals(java.lang.Object that) {
    if (that == null)
      return false;
    if (that instanceof Tops)
      return this.equals((Tops)that);
    return false;
  }

  public boolean equals(Tops that) {
    if (that == null)
      return false;
    if (this == that)
      return true;

    boolean this_present_ASIN = true && this.isSetASIN();
    boolean that_present_ASIN = true && that.isSetASIN();
    if (this_present_ASIN || that_present_ASIN) {
      if (!(this_present_ASIN && that_present_ASIN))
        return false;
      if (!this.ASIN.equals(that.ASIN))
        return false;
    }

    boolean this_present_Title = true && this.isSetTitle();
    boolean that_present_Title = true && that.isSetTitle();
    if (this_present_Title || that_present_Title) {
      if (!(this_present_Title && that_present_Title))
        return false;
      if (!this.Title.equals(that.Title))
        return false;
    }

    boolean this_present_ItemUrl = true && this.isSetItemUrl();
    boolean that_present_ItemUrl = true && that.isSetItemUrl();
    if (this_present_ItemUrl || that_present_ItemUrl) {
      if (!(this_present_ItemUrl && that_present_ItemUrl))
        return false;
      if (!this.ItemUrl.equals(that.ItemUrl))
        return false;
    }

    boolean this_present_Category = true && this.isSetCategory();
    boolean that_present_Category = true && that.isSetCategory();
    if (this_present_Category || that_present_Category) {
      if (!(this_present_Category && that_present_Category))
        return false;
      if (!this.Category.equals(that.Category))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    int hashCode = 1;

    hashCode = hashCode * 8191 + ((isSetASIN()) ? 131071 : 524287);
    if (isSetASIN())
      hashCode = hashCode * 8191 + ASIN.hashCode();

    hashCode = hashCode * 8191 + ((isSetTitle()) ? 131071 : 524287);
    if (isSetTitle())
      hashCode = hashCode * 8191 + Title.hashCode();

    hashCode = hashCode * 8191 + ((isSetItemUrl()) ? 131071 : 524287);
    if (isSetItemUrl())
      hashCode = hashCode * 8191 + ItemUrl.hashCode();

    hashCode = hashCode * 8191 + ((isSetCategory()) ? 131071 : 524287);
    if (isSetCategory())
      hashCode = hashCode * 8191 + Category.hashCode();

    return hashCode;
  }

  @Override
  public int compareTo(Tops other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = java.lang.Boolean.valueOf(isSetASIN()).compareTo(other.isSetASIN());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetASIN()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.ASIN, other.ASIN);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.valueOf(isSetTitle()).compareTo(other.isSetTitle());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetTitle()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.Title, other.Title);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.valueOf(isSetItemUrl()).compareTo(other.isSetItemUrl());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetItemUrl()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.ItemUrl, other.ItemUrl);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = java.lang.Boolean.valueOf(isSetCategory()).compareTo(other.isSetCategory());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetCategory()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.Category, other.Category);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    scheme(iprot).read(iprot, this);
  }

  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    scheme(oprot).write(oprot, this);
  }

  @Override
  public java.lang.String toString() {
    java.lang.StringBuilder sb = new java.lang.StringBuilder("Tops(");
    boolean first = true;

    sb.append("ASIN:");
    if (this.ASIN == null) {
      sb.append("null");
    } else {
      sb.append(this.ASIN);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("Title:");
    if (this.Title == null) {
      sb.append("null");
    } else {
      sb.append(this.Title);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("ItemUrl:");
    if (this.ItemUrl == null) {
      sb.append("null");
    } else {
      sb.append(this.ItemUrl);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("Category:");
    if (this.Category == null) {
      sb.append("null");
    } else {
      sb.append(this.Category);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, java.lang.ClassNotFoundException {
    try {
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class TopsStandardSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
    public TopsStandardScheme getScheme() {
      return new TopsStandardScheme();
    }
  }

  private static class TopsStandardScheme extends org.apache.thrift.scheme.StandardScheme<Tops> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, Tops struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // ASIN
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.ASIN = iprot.readString();
              struct.setASINIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // TITLE
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.Title = iprot.readString();
              struct.setTitleIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // ITEM_URL
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.ItemUrl = iprot.readString();
              struct.setItemUrlIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 4: // CATEGORY
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.Category = iprot.readString();
              struct.setCategoryIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    public void write(org.apache.thrift.protocol.TProtocol oprot, Tops struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.ASIN != null) {
        oprot.writeFieldBegin(ASIN_FIELD_DESC);
        oprot.writeString(struct.ASIN);
        oprot.writeFieldEnd();
      }
      if (struct.Title != null) {
        oprot.writeFieldBegin(TITLE_FIELD_DESC);
        oprot.writeString(struct.Title);
        oprot.writeFieldEnd();
      }
      if (struct.ItemUrl != null) {
        oprot.writeFieldBegin(ITEM_URL_FIELD_DESC);
        oprot.writeString(struct.ItemUrl);
        oprot.writeFieldEnd();
      }
      if (struct.Category != null) {
        oprot.writeFieldBegin(CATEGORY_FIELD_DESC);
        oprot.writeString(struct.Category);
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class TopsTupleSchemeFactory implements org.apache.thrift.scheme.SchemeFactory {
    public TopsTupleScheme getScheme() {
      return new TopsTupleScheme();
    }
  }

  private static class TopsTupleScheme extends org.apache.thrift.scheme.TupleScheme<Tops> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, Tops struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TTupleProtocol oprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      java.util.BitSet optionals = new java.util.BitSet();
      if (struct.isSetASIN()) {
        optionals.set(0);
      }
      if (struct.isSetTitle()) {
        optionals.set(1);
      }
      if (struct.isSetItemUrl()) {
        optionals.set(2);
      }
      if (struct.isSetCategory()) {
        optionals.set(3);
      }
      oprot.writeBitSet(optionals, 4);
      if (struct.isSetASIN()) {
        oprot.writeString(struct.ASIN);
      }
      if (struct.isSetTitle()) {
        oprot.writeString(struct.Title);
      }
      if (struct.isSetItemUrl()) {
        oprot.writeString(struct.ItemUrl);
      }
      if (struct.isSetCategory()) {
        oprot.writeString(struct.Category);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, Tops struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TTupleProtocol iprot = (org.apache.thrift.protocol.TTupleProtocol) prot;
      java.util.BitSet incoming = iprot.readBitSet(4);
      if (incoming.get(0)) {
        struct.ASIN = iprot.readString();
        struct.setASINIsSet(true);
      }
      if (incoming.get(1)) {
        struct.Title = iprot.readString();
        struct.setTitleIsSet(true);
      }
      if (incoming.get(2)) {
        struct.ItemUrl = iprot.readString();
        struct.setItemUrlIsSet(true);
      }
      if (incoming.get(3)) {
        struct.Category = iprot.readString();
        struct.setCategoryIsSet(true);
      }
    }
  }

  private static <S extends org.apache.thrift.scheme.IScheme> S scheme(org.apache.thrift.protocol.TProtocol proto) {
    return (org.apache.thrift.scheme.StandardScheme.class.equals(proto.getScheme()) ? STANDARD_SCHEME_FACTORY : TUPLE_SCHEME_FACTORY).getScheme();
  }
}

