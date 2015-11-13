#include <stdio.h>
#include <stdlib.h>
#include <assert.h>

#define JAMMED_FILE "combined.js"

#define NUMBER_OF_JS 8


#define file0 "core.js"
#define file1 "line.js"
#define file2 "inheritance_line.js"
#define file3 "diagram.js"
#define file4 "property_diagram.js"
#define file5 "variable_property.js"
#define file6 "method_property.js"
#define file7 "apoena_parser.js"





















#define IF_FILE0 if(i==0) {tempNode->filename = file0;}
#define IF_FILE1 if(i==1) {tempNode->filename = file1;}
#define IF_FILE2 if(i==2) {tempNode->filename = file2;}
#define IF_FILE3 if(i==3) {tempNode->filename = file3;}
#define IF_FILE4 if(i==4) {tempNode->filename = file4;}
#define IF_FILE5 if(i==5) {tempNode->filename = file5;}
#define IF_FILE6 if(i==6) {tempNode->filename = file6;}
#define IF_FILE7 if(i==7) {tempNode->filename = file7;}


#define GAMBIARRA fin = fopen(file7, "rb");assert(fin!=NULL);write(fin, fout, file7);

typedef struct _NODE{
	char *filename;
	struct _NODE *next;
	struct _NODE *previous;
}NODE;

typedef struct _LIST{
	NODE *head;
	NODE *current;
}LIST;

void write(FILE *fin, FILE *fout, char *filename){
	int i = 0;
	int ch = '\0';

	printf("\n Appending %s ... ", filename);
	while((ch=fgetc(fin))!= EOF){
		fputc(ch,fout);
		i++;
	}
	printf("DONE\n");
}


int main(){

	FILE *fin = NULL;
	FILE *fout = NULL;
	int i = 0;

	LIST *list = malloc(sizeof(LIST));
	assert(list!=NULL);
	list->head = NULL;

	fout = fopen(JAMMED_FILE, "wb");
	assert(fout!=NULL);
	fout = fopen(JAMMED_FILE, "ab");
	assert(fout!=NULL);

	//fprintf(fout, "\"use strict\";\n");

	for(i = 0; i<NUMBER_OF_JS; i++){
		NODE *tempNode;
		tempNode = malloc(sizeof(NODE));

		if(list->head == NULL){
			list->head = tempNode;
			list->current = tempNode;
			tempNode->next = NULL;
			tempNode->previous = NULL;
			IF_FILE0
		}
		else{
			list->current->next = tempNode;
			tempNode->previous = list->current;
			tempNode->next = NULL;
			list->current = tempNode;

			IF_FILE1
			IF_FILE2
			IF_FILE3
			IF_FILE4
			IF_FILE5
			IF_FILE6
			IF_FILE7
		}
	}

	NODE *node;
	node = list->head;

	for(i = 0; node->next!=NULL; i++){

		fin = fopen(node->filename, "rb");
		assert(fin!=NULL);

		write(fin, fout, node->filename);

		node = node->next;
	}

	//GAMBIARRA LEVEL 100
	GAMBIARRA


	fclose(fin);
	fclose(fout);

	//getch();
	return 0;
}
