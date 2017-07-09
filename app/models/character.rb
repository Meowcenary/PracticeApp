class Character < ApplicationRecord
  def class_names
    return [
             'Warrior',
             'Wizard'
           ]
  end

  #this will be used in future refactors
  def character_attributes
    return [
             'name',
             'level',
             'class_name',
             'race',
             'background',
             'alignment',
             'strength',
             'dexterity',
             'constitution',
             'intelligence',
             'wisdom',
             'charisma'
           ]
  end
end
