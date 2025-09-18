import os

folder_name = "Event_1105-1106"
# read file name
path = "../image/" + folder_name
dir_list = os.listdir(path)

# write
with open(folder_name + '.txt', 'w', encoding="utf-8") as f:
    for i in dir_list:
        f.writelines(i + "\n")