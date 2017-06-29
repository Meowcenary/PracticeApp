DEFAULT_CHARACTER_COUNT = 8

default_char_attrs = {name: 'default', char_class: 'default', level: 1, background: 'default', race: 'default', alignment: 'default', strength: 1, dexterity: 2, constitution: 3, intelligence: 4, wisdom: 5, charisma: 6}

DEFAULT_CHARACTER_COUNT.times { Character.create!(default_char_attrs) }


