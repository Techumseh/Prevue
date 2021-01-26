class CreateJointTableCompanyIndustry < ActiveRecord::Migration[6.1]
  def change
    create_table :joint_table_company_industries do |t|
      t.string :company
      t.string :industry

      t.timestamps
    end
  end
end
