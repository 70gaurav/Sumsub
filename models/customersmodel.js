import Connection from ".";

const Customer = (sequelize, Sequelize) => { 
  return sequelize.define('customer', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        dob: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        nationality: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        marital_status: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        document_type: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        document: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        document_back: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        profile: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        id_number: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        expiry: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        email:{
          type: Sequelize.STRING,
          unique: true,
          allowNull:false
        },
        device_type:{
          type: Sequelize.STRING,
          allowNull:true
        },
        device_token:{
          type: Sequelize.STRING,
          allowNull:true
        },
        sumsub_applicantId:{
          type: Sequelize.STRING,
          allowNull:true
        },
        payslip:{
          type: Sequelize.STRING,
          allowNull:true
        },
        street:{
          type: Sequelize.STRING,
          allowNull:true
        },
        zip_code:{
          type: Sequelize.STRING,
          allowNull:true
        },
        address_image:{
          type: Sequelize.STRING,
          allowNull:true
        },
        iban:{
          type: Sequelize.STRING,
          allowNull:true
        },
        bban:{
          type: Sequelize.STRING,
          allowNull:true
        },
        bank_account:{
          type: Sequelize.STRING,
          allowNull:true
        },
        bank_name:{
          type: Sequelize.STRING,
          allowNull:true
        },
        town:{
          type: Sequelize.STRING,
          allowNull:true
        },
        country:{
          type: Sequelize.STRING,
          allowNull:true
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true,
          validate: {
            isValidPhoneNo: function(value) {
              if (!value) return value;

              var regexp = /^[0-9]+$/;
              var values = (Array.isArray(value)) ? value : [value];

              values.forEach(function(val) {
              if (!regexp.test(val)) {
              throw new Error("Number only is allowed.");
              }
              });
              return value;
            }
          }
        },
        // 1 complete and 0 incomplete
        is_complete: {
          type:   Sequelize.ENUM,
          values: [0, 1],
          defaultValue: 0
        },
        status: {
          type:   Sequelize.ENUM,
          values: [0, 1],
          defaultValue: 1
        },
        password:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: Sequelize.DATE,
        updated_at:  Sequelize.DATE,
		},
		{
			timestamps: false,		
    });
};

          
export default Customer;