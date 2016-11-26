require 'json'

data = JSON.parse(File.read('./data/pkmn.json'))

count_per_row = 32
count = 0
x = -40
y = -30

data.each do |id, pokemon|

  pokemon["icons"].each do |name, icon|
    form = name == "." ? "" : ".form-#{name}"

    if !icon["is_duplicate"]
      puts ".pkicon.pkicon-#{id}#{form} { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
      count += 1

      if icon["has_right"]
        puts ".pkicon.pkicon-#{id}#{form}.dir-right { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      if icon["has_female"]
        puts ".pkicon.pkicon-#{id}#{form}.gender-female { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      puts ".pkicon.pkicon-#{id}#{form}.color-shiny { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
      count += 1

      if icon["has_right"]
        puts ".pkicon.pkicon-#{id}#{form}.color-shiny.dir-right { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end

      if icon["has_female"]
        puts ".pkicon.pkicon-#{id}#{form}.gender-female { background-position: #{x * (count % count_per_row)}px #{y * (count / count_per_row).floor}px; }"
        count += 1
      end
    end
  end
end
