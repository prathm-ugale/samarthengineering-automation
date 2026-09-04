# -*- coding: utf-8 -*-
import os, json

def save(rel_path, content):
    abs = os.path.abspath(rel_path)
    os.makedirs(os.path.dirname(abs), exist_ok=True)
    with open(abs, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Saved:', rel_path)

