# My Local Version Control

1. Always checkout development branch
2. git checkout -b featureName
3. Do work
4. git add . origin featureName
5. git commit -m "comment"
6. Create pull request.  Compare featureName to development branch
7. Team review 
8. Merge featureName to development **repo maintainer only**
9. git checkout development 
10. git origin pull development
-- End Process for Developer -- 
11. **repo maintainer only** Merge development into master
